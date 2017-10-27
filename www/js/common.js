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
                 "<div class='department'>内科</div>" +
                 "<div class='date'>2017/10/03</div>" +
               "</ons-card>");
      document.querySelector('.interview_sheet__body').appendChild(elements);
    });
  }, 2000);

}

document.addEventListener('init', function(event) {
});

ons.ready( () => {
  const langMap = {
    name                 : '名前',
    sex                  : '性別',
    male                 : '男性',
    female               : '女性',
    birthday             : '生年月日',
    tel                  : '電話番号',
    address              : '住所',
    has_health_insurance : '健康保険を持ってますか？',
    yes                  : 'はい',
    no                   : 'いいえ',
    nationality          : '国籍',
    save                 : '保存'
  };

  setTemplate(langMap, 'html/personal.html', 'personal.html');

  setTemplate(null, 'html/account.html', 'account.html');

  setTemplate(null, 'html/interview_sheet.html', 'interview_sheet.html');

  setTemplate(null, 'html/select_department.html', 'select_department.html');

  setTemplate(null, 'html/ask_department.html', 'ask_department.html');

  setTemplate(null, 'html/internal_medicine_p1.html', 'ask_p1.html');

  setTemplate(null, 'html/internal_medicine_p2.html', 'ask_p2.html');

  setTemplate(null, 'html/internal_medicine_p3.html', 'ask_p3.html');

});


function setTemplate( langMap, page_url, template_id ) {

  const xhr = new XMLHttpRequest();
  xhr.open('GET', page_url);
  xhr.send(null);

  return new Promise( (res, rej) => {

    xhr.onload = () => {
      const compiled  = _.template(xhr.responseText);
      const html = compiled(langMap);
      document.querySelector('template[id="' + template_id + '"]').innerHTML = html;
      res(html);
    }

  });
}

