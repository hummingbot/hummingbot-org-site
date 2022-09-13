import { store } from 'react-notifications-component';

export const showNotify = (title, success) => {
  store.addNotification({
    title: success ? 'Success' : 'Error',
    message: title,
    type: success ? 'success' : 'danger',
    insert: 'top',
    container: 'top-right',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 5000,
      onScreen: true
    }
  });
};
