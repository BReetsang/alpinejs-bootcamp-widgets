document.addEventListener('alpine:init', () => {

    Alpine.data('wordCrushWidget', function () {
        return {
            sentence: '',
            longWordMessage: '',
            shortWordMessage: '',
            sumMessage: '',
            sumLength: 0,
            findLong() {
                this.longWordMessage = longestWord(this.sentence);
                setTimeout(() => {
                    this.longWordMessage = '';
                    this.sentence = '';
                }, 5000);

            },
            findShort() {
                this.shortWordMessage = shortestWord(this.sentence);
                setTimeout(() => {
                    this.shortWordMessage = '';
                    this.sentence = '';                    
                }, 5000);
            },
            findSum() {
                this.sumMessage = wordLengths(this.sentence, this.sumLength);
                setTimeout(() => {
                    this.sumMessage = '';
                    this.sentence = '';
                }, 5000);

            }

        }


    });
})


