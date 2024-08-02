export function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      const data = {
        status: 200,
        body: 'success',
      }
      resolve(data);
    } else {
      reject('The fake API is not working currently');
    }
  });
}