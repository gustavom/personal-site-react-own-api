import React, { useState, useEffect, useRef } from 'react';
import { useField } from '@rocketseat/unform';
import api from '~/services/api';
import { toast } from 'react-toastify';

import { MdAddAPhoto } from 'react-icons/md';

import { Container } from './styles';

export default function BannerInput({ urlImg }) {
  const { defaultValue, registerField } = useField('banner');
  const { error } = useField('banner_id');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'banner_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
    // console.log('teste', registerField.value);
  }, [ref]); //eslint-disable-line

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);
    data.append('type', 'banner');

    try {
      const response = await api.post('files', data);

      const { id, url } = response.data;

      setFile(id);
      setPreview(url);
    } catch (err) {
      toast.error(`Whoops! Internal server error.${err}`);
    }
  }

  return (
    <Container>
      {/* {console.log('urlImg', urlImg)} */}
      <label htmlFor="banner">
        {/* <img src={urlImg} alt="" /> */}

        {urlImg && !preview && <img src={urlImg} alt="" />}
        {preview && <img src={preview} alt="" />}

        {!preview && !urlImg && (
          <div className="icon-add">
            <MdAddAPhoto size={48} color="rgba(0, 0, 0, .7)" />
          </div>
        )}

        <input
          type="file"
          id="banner"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />

        {error && <span>{error}</span>}
      </label>
    </Container>
  );
}
