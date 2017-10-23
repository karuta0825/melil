window.fn = {};

window.fn.pushPage = function (page, anim) {
  if (anim) {
    return document.getElementById('appNavigator').pushPage(page.id, { data: { title: page.title }, animation: anim });
  } else {
    return document.getElementById('appNavigator').pushPage(page.id, { data: { title: page.title } });
  }
};

window.fn.popPage = function (anim) {
  if (anim) {
    return document.getElementById('appNavigator').popPage({ animation: anim });
  } else {
    return document.getElementById('appNavigator').popPage();
  }
};

window.fn.resetToPage = function (page, anim) {
  if (anim) {
    return document.getElementById('appNavigator').resetToPage(page.id, { data: { title: page.title }, animation: anim })
  } else {
    return document.getElementById('appNavigator').resetToPage(page.id, { data: { title: page.title } })
  }
};

// セレクト
function selectLang(event) {
  document.getElementById('choose-sel').removeAttribute('modifier');
  if (event.target.value == 'material' || event.target.value == 'underbar') {
    document.getElementById('choose-sel').setAttribute('modifier', event.target.value);
  }
}

function selectNational(event) {
  document.getElementById('choose-natonality').removeAttribute('modifier');
  if (event.target.value == 'material' || event.target.value == 'underbar') {
    document.getElementById('choose-sel').setAttribute('modifier', event.target.value);
  }
}

function addOption(event) {
  const option = document.createElement('option');
  let text = document.getElementById('optionLabel').value;
  option.innerText = text;
  text = '';
  document.getElementById('dynamic-sel').appendChild(option);
}

function changeLaguage() {
  var modal = document.querySelector('ons-modal');
  modal.show();
  setTimeout(function() {
    modal.hide();
  }, 2000);
}

function saveUserInfo() {
  var modal = document.querySelector('ons-modal');
  modal.show();
  setTimeout(function() {
    modal.hide();
    fn.popPage('default');
  }, 2000);
}

function makeInterviewSheet() {
  var modal = document.querySelector('ons-modal');
  modal.show();
  setTimeout(function() {
    modal.hide();

    fn.resetToPage({'id': 'tabber.html', 'title': '問診票'}, 'default')
    .then( () => {
      var elements = ons.createElement("<ons-card>" +
                 "<div class='title'>2017/10/03</div>" +
                 "<div class='content'>Content</div>" +
               "</ons-card>");
      document.querySelector('.interview_sheet__body').appendChild(elements);
    });
  }, 2000);

}
