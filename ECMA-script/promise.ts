const promise1 = new Promise((resolve, reject) => {
    reject(2);
    resolve(1);
  });
  /**
   * Promise chain call
   */
  promise1
    .then(
      (res) => {
        console.log(res); // not run here
      },
      (rej) => {
        console.log('[then1 rej]', rej); // run here
      }
    )
    .catch((rej) => {
      console.log('[catch rej]', rej); // if last .then() doesn't have the 2nd callback,then run here
    })
    .then((res) => {
      console.log('[then2 res]', res); // run here: undefined
      return Promise.resolve(3);
    })
    .then((res) => {
      console.log('[then3 res]', res); // 3
      return res;
    })
    .then((res) => {
      console.log('[then4 res]', res); // 3
    });
  
  const promise2 = new Promise((resolveOuter, rejectOuter) => {
    resolveOuter(
      new Promise((resolveInner, rejectInner) => {
        setTimeout(() => {
          resolveInner(1);
        }, 1000);
      })
    );
  });
  promise2
    .then((res) => {
      console.log(res); // 1
    })
    .catch((rej) => {
      console.log(rej);
    });
  
  const promise3 = Promise.resolve(
    new Promise((res, rej) => {
      res(Promise.reject(1));
    })
  );
  
  promise3.then(
    (res) => {
      console.log('[then1 res]', res);
    },
    (rej) => {
      console.log('[then1 rej]', rej); // [then1 rej] 1
    }
  );
  