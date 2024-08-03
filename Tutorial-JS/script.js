function goToBathRoom(callback) {
  setTimeout(() => {
    console.log("You Went to bathroom.");
    callback();
  }, 1000);
}
function makePop(callback) {
  setTimeout(() => {
    console.log("You Poped..");
    callback();
  }, 2000);
}
function clean(callback) {
  setTimeout(() => {
    console.log("You Cleaned...");
    callback();
  }, 1500);
}

goToBathRoom(() =>
  makePop(() => {
    clean(() => {
      console.log("You Finished all chores....");
    });
  })
);
