import React from 'react';
import useTranslations from '../../hooks/useTranslations';
import Modal from './Modal';
import clipboard from '../../img/clipboard.svg?url';
import download from '../../img/download.svg?url';
import upload from '../../img/upload.svg?url';
import NotificationPopup from '../NotificationPopup';
import useRepositoryActions from '../../hooks/useRepositoryActions';

export default function RepoModal() {
  const t = useTranslations();
  const {
    notification,
    setNotification,
    request,
    dataUrl,
    setRequest,
    response,
    setResponse,
    onSubmit,
    onClose,
    onCopy,
    handleUpload,
  } = useRepositoryActions();

  return (
    <Modal onClose={onClose}>
      {notification && (
        <NotificationPopup
          notification={notification}
          onClose={() => setNotification(null)}
        />
      )}
      <h3>{t.caDetails.repoTab.addRepo}</h3>
      <form onSubmit={onSubmit} method="POST">
        <div>
          <label>{t.caDetails.repoTab.request}</label>
          <textarea name="request" readOnly value={request} id="request" onChange={(e) => setRequest(e.target.value)} />
          <div>
            <button className="button large icon" type="button" title={t.common.copy} onClick={onCopy}>
              <img src={clipboard} alt={t.common.copy} />
            </button>
            <a className="button large icon" title={t.common.download} href={dataUrl} download="publisher_request.xml">
              <img src={download} alt={t.common.download} />
            </a>
          </div>
        </div>
        <div>
          <label>{t.caDetails.repoTab.response}</label>
          <textarea name="response" value={response} onChange={(e) => setResponse(e.target.value)}/>
          <input type="file" id="upload" onChange={handleUpload} />
          <label className="button large icon" htmlFor="upload" title={t.common.dropOrClick}>
            <img src={upload} alt={t.common.dropOrClick} />
          </label>
        </div>
        <div className="actions">
          <button className="button outline" onClick={onClose}>
            {t.common.cancel}
          </button>
          <button type="submit" className="button">
            {t.common.confirm}
          </button>
        </div>
      </form>
    </Modal>
  );
}
