function horoscope(){
  var month = document.getElementById("month").value;
  var day = document.getElementById("day").value;
  var result = "Is that the correct birthdate?";

  if (month == 1&& day >= 20 || month == 2 && day <= 18){
    result = ("Outspoken Aqaurius kittes love all creatures great and small, and know how to gather a following of adorers.");
    document.getElementById("sign");
    document.getElementById("img").innerHTML = "<img src='images/aqaurius.jpg'>";
  }

  if (month == 2&& day >= 19 || month == 3&& day <= 20){
    result = ("Imaginative Pisces cats will turn anything into a new toy, and love gazing out the window at the great big world.");
    document.getElementById("sign");
    document.getElementById("img").innerHTML = "<img src='images/pisces.jpg'>";
  }

  if (month == 3&& day >= 21 || month == 4 && day <= 19){
    result = ("Watch out for love bites! Active Aries kitties love to hunt, and they prefer chasing mice to cuddling.");
    document.getElementById("sign");
    document.getElementById("img").innerHTML = "<img src='images/aries.jpg'>";
  }

  if (month == 4&& day >= 20|| month == 5 && day <= 20){
    result = ("More, please! Pleasure-seeking Taurus kitties love to indulge in extra kibble, followed by lots of petting.");
    document.getElementById("sign");
    document.getElementById("img").innerHTML = "<img src='images/taurus.jpg'>";
  }

  if (month == 5&& day >= 21 || month == 6 && day <= 20
  ){
    result = ("Active, curious and mischievous, Gemini Twin kitties love to spaz out and meow-talk constantly!");
    document.getElementById("sign");
    document.getElementById("img").innerHTML = "<img src='images/gemini.jpg'>";
  }

  if (month == 6&& day >= 21 || month == 7&& day <= 22){
    result = ("Peek-a-boo! Your sweet affectionate scaredy cat likes to hide under the bed, where it's safe and quiet.");
    document.getElementById("sign");
    document.getElementById("img").innerHTML = "<img src='images/cancer.jpg'>";
  }

  if (month == 7&& day >= 23 || month == 8 && day <= 22){
    result = ("I am kitty, hear me roar! Loving Leos demand your full attention, so pamper them with lots of love and toys.");
    document.getElementById("sign");
    document.getElementById("img").innerHTML = "<img src='images/leo.jpg'>";
  }

  if (month == 8 && day >= 23 || month == 9 && day <= 22){
    result = ("Virgo kitties expect the best. Buy their favorite food, and keep their litter box clean to avoid hissy fits!");
    document.getElementById("sign");
    document.getElementById("img").innerHTML = "<img src='images/virgo.jpg'>";
  }

  if (month == 9&& day >= 23 || month == 10&& day <= 22){
    result = ("What a pretty kitty! Rules by Venus, planet of love, and beauty, Libra loves preening and cuddling with you.");
    document.getElementById("sign");
    document.getElementById("img").innerHTML = "<img src='images/libra.jpg'>";
  }

  if (month == 10 && day >= 23|| month == 11 && day <= 21){
    result = ("Me-yeow! Scorpio cats are full of love one minute, but quick to hiss - especially if you pet another cat!");
    document.getElementById("sign");
    document.getElementById("img").innerHTML = "<img src='images/scorpio.jpg'>";
  }

  if (month == 11 && day >= 22 || month == 12 && day <= 21){
    result = ("Playful Sag kitties love making a mess, and sometimes disappear for days, roaming and exploring for excitement.");
    document.getElementById("sign");
    document.getElementById("img").innerHTML = "<img src='images/sagi.jpg'>";
  }

  if(month == 12 && day >= 22 || month == 1 && day <= 19){
    result = ("Capricats are the boss! Shy and serious, your cat expresses devotion to you and demands the same in return.");
    document.getElementById("sign");
    document.getElementById("img").innerHTML = "<img src='images/capricorn.jpg'>";
  }else if (month>12||day>31){
  }
  document.getElementById("output").innerHTML= result;
  }
