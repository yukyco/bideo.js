(function () {
  var bv = new BackgroundVideo();
  bv.init({
    // Video element
    videoEl: document.querySelector('#background_video'),

    // Container element
    container: document.querySelector('body'),

    // Resize
    resize: true,

    // Array of objects containing the src and type
    // of different video formats to add
    src: [
      {
        src: 'night.mp4',
        type: 'video/mp4'
      }
    ],

    // What to do once video loads (initial frame)
    onLoad: function () {
    },

    // Minimum number of seconds to buffer before playing
    // or after a pause for buffering
    // minBuffer: 5,
    // acceptableLoadingRate: {
      // value: 0.7,
      // stopBuffering: true,
      // callback: function () {
      //   // Video won't play, so perform any relevant desirable action
      // }
    // }
  });
}());
