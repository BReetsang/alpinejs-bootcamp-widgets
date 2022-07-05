document.addEventListener('alpine:init', () => {

    Alpine.data('totalPhoneBillWidget', function () {
        return {
            callsSMSMade :'',
            totalBillMessage :'',
            phoneBill : '',
            calculatebill() {                
                this.totalBillMessage = totalPhoneBill(this.callsSMSMade, this.phoneBill); 
                setTimeout(() => {
                    this.totalBillMessage = '';
                    this.callsSMSMade = '';
                }, 3000);
            }
        }

    });

})