// const avatar = document.getElementById("avatar");
// const url = "https://api.adorable.io/avatars/face/1/3/4/fff/250";

const myEyes = () => {
  const eyes = document.getElementById("eyeSelection");
  const theEye = eyes.options[eyes.selectedIndex].value;
  console.log("eyes: " + theEye);
  return theEye;
};

const myNose = () => {
  const nose = document.getElementById("noseSelection");
  const theNose = nose.options[nose.selectedIndex].value;
  console.log("nose: " + theNose);
  return theNose;
};

const myMouth = () => {
  const mouth = document.getElementById("mouthSelection");
  const theMouth = mouth.options[mouth.selectedIndex].value;
  console.log("mouth: " + theMouth);
  return theMouth;
};

const color = () => {
  const color = document.getElementById("colorSelection");
  const rbg = color.options[color.selectedIndex].value;
  console.log("color: " + rbg);
  return rbg;
};

const mySize = () => {
  const size = document.getElementById("sizeSelection");
  const theSize = size.options[size.selectedIndex].value;
  console.log("size: " + theSize);
  return theSize;
};

const myAvatar = () => {
  const avatar = document.getElementById("avatar");
  const url = `https://api.adorable.io/avatars/face/${myEyes()}/${myNose()}/${myMouth()}/${color()}/${mySize()}`;
  avatar.src = url;
  console.log(url);
};
