function myPromise(excecutor) {
  const self = this;
  this.status = "pending";
  this.res = null;
  this.onFullfilledFn = Function.prototype;
  this.onRejectedFn = Function.prototype;
  function resolve(value: any) {
    if (value instanceof myPromise) {
      return value.then(resolve, reject);
    }
    setTimeout(() => {
      if (self.status === "pending") {
        self.status = "fullfilled";
        self.res = value;
        self.onFullfilledFn(self.res);
      }
    });
  }
  function reject(value: any) {
    setTimeout(() => {
      if (self.status === "pending") {
        self.status = "rejected";
        self.res = value;
        self.onRejectedFn(self.res);
      }
    });
  }
  try {
    excecutor(resolve, reject);
  } catch (e) {
    this.reject(e);
  }
}
myPromise.prototype.then = function (
  onfullfilled = Function.prototype,
  onrejected = Function.prototype
) {
  onfullfilled =
    typeof onfullfilled === "function" ? onfullfilled : (data) => data;
  onrejected =
    typeof onrejected === "function"
      ? onrejected
      : (error) => {
          throw error;
        };
  if (this.status === "fullfilled") {
    onfullfilled(this.res);
  }
  if (this.status === "rejected") {
    onrejected(this.res);
  }
  if (this.status === "pending") {
    this.onFullfilledFn = onfullfilled;
    this.onRejectedFn = onrejected;
  }
};
