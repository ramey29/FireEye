window.addEventListener("load", function() {
        callTwitter('SrBachchan');      
});

function callTwitter(username){
  document.getElementById('containerX').innerHTML = '';
twttr.widgets.createTimeline(
              {
                sourceType: 'profile',
                screenName: username
              },
              document.getElementById('containerX')
              )
}
