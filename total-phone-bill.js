function totalPhoneBill(phoneBill) {
  var sms = 0.65;
  var call = 2.75;
  var phoneBillResults = phoneBill.split(', ');
  let totalBill = 0;
  for (var i = 0; i < phoneBillResults.length; i++) {
      if (phoneBillResults[i].startsWith('call')) {
          totalBill += call;
      } else if (phoneBillResults[i].startsWith('sms')) {
          totalBill += sms;
      }

  }
  return 'R' + totalBill.toFixed(2);
}
//console.log(totalPhoneBill('call, sms, call, sms, sms'));


