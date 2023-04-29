
function copy() {
  var copyText = document.getElementById("output");
  copyText.select();
  copyText.setSelectionRange(0, 99999); 
  document.execCommand("copy");
  document.getElementById("saved").classList.remove("savedHide");
  document.getElementById("saved").classList.add("saved");
  setInterval(function(){
    document.getElementById("saved").classList.add("savedHide");
    document.getElementById("saved").classList.remove("saved");
  },3000);
}

function myFunction() {
  let letters = [
    "ا",
    "أ",
    "إ",
    "آ",
    "ء",
    "ب",
    "پ",
    "ت",
    "ث",
    "ج",
    "چ",
    "ح",
    "خ",
    "د",
    "ذ",
    "ر",
    "ز",
    "ژ",
    "س",
    "ش",
    "ص",
    "ض",
    "ط",
    "ظ",
    "ع",
    "غ",
    "ف",
    "ڤ",
    "ق",
    "ك",
    "گ",
    "ل",
    "م",
    "ن",
    "ه",
    "ة",
    "و",
    "ؤ",
    "ي",
    "ى",
    "ئ",
  ];
  let LETTERS_DICT = {
    a:"j",
    ا: "ا",
      أ: "ا",
      إ: "ا",
      آ: "ا",
      ء: "",
      ب: "ٮ",
      پ: "ٮ",
      ت: "ٮ",
      ث: "ٮ",
      ج: "ح",
      چ: "ح",
      خ: "ح",
      ح: "ح",
      د: "د",
      ذ: "د",
      ر: "ر",
      ز: "ر",
      ژ: "ر",
      س: "س",
      ش: "س",
      ص: "ص",
      ض: "ص",
      ط: "ط",
      ظ: "ط",
      ع: "ع",
      غ: "ع",
      ف: "ڡ",
      ڤ: "ڡ",
      ق: "ٯ",
      ك: "ک",
      گ: "ک",
      ل: "ل",
      م: "م",
      ن: "ں",
      ه: "ه",
      و: "و",
      ؤ: "و",
      ة: "ه",
      ى: "ى",
      ي: "ى",
      ئ: "ى",
  };
  var input = document.getElementById("input").value;
  var text=input;
  for(i = 0; i < text.length; i++){

    var result = letters.includes(text[i]);
    var letter=text[i];
    if(result){
      text=text.replace(text[i], LETTERS_DICT[letter]);
    }
    if(letter=="ن"){
      if(letters.includes(text[i+1])){
        text=text.replace(text[i], LETTERS_DICT["ب"]);
      }
      else{
          text=text.replace(text[i], LETTERS_DICT["ن"]);
      }
    }
  }
  document.getElementById("output").innerHTML = text;
  document.getElementById("letterNumber").innerHTML = input.length;
}

function sendToFrom(text) {
  text = encodeURIComponent(text);

  
  const formId = '1FAIpQLSdK673k47XYsgfOXa9b1DUMjB3fuCS0xJ_Txo6qvc7jVpkbEg';
  const queryString = '/formResponse?&entry.1827570689=' + text;
  const url = 'https://docs.google.com/forms/d/e/' + formId + queryString;


  const options = {
    method: "POST",
    mode: "no-cors", // apparently Google will only submit a form if "mode" is "no-cors"
    redirect: "follow",
    referrer: "no-referrer"
  }

  fetch(url, options).catch((e) => console.log("error:", e));
}