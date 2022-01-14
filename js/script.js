new Vue({
    el: "#app",
    data: {
        message: '',
        color: 'black',
        modalShow: false,
        age: 0,
        students: [
            'Mino',
            'Pino',
            'Gino'
        ],
        currentIndex: 0,
        images: [
            {
                urlImage: '/Users/alexanderjaviercabelloperez/Desktop/Boolean /vue-slider/img/marc-kleen-eRwmBvhfvG8-unsplash.jpg',
            },
            {
                urlImage: '/Users/alexanderjaviercabelloperez/Desktop/Boolean /vue-slider/img/maria-teneva-HQnYH_zBcOg-unsplash.jpg',
            },
            {
                urlImage: '/Users/alexanderjaviercabelloperez/Desktop/Boolean /vue-slider/img/nils-leonhardt-YeBI31kK2_4-unsplash.jpg',
            },
            {
                urlImage: '/Users/alexanderjaviercabelloperez/Desktop/Boolean /vue-slider/img/sebastiaan-stam-RChZT-JlI9g-unsplash.jpg',
            }
        ]
    },
    methods: {
        saluta: function () {
            // il this in vue.js è la 
            // "conoscenza" che ha vue.js dei
            // vari oggetti (data, methods...)
            // con il this accediamo direttamente 
            // alle proprietà di data.
            alert(this.message)
        },
        openModal: function () {
            // this.modalShow === false
            // if (!this.modalShow) { // qui è false
            //     this.modalShow = true;
            // } else {  // qui è true
            //     this.modalShow = false;
            // }

            // this.modalShow deve essere il contrario di sé stesso
            this.modalShow = !this.modalShow;
        },
        nextFreddura: function () {
            if (this.currentIndex === this.images.length - 1) {
                this.currentIndex = 0;
            } else {
                this.currentIndex++;
            }
            // todo -> e se arrivo alla fine dell'array?
        },
        prevFreddura: function () {
            if (this.currentIndex === 0) {
                this.currentIndex = this.images.length - 1;
            } else {
                this.currentIndex--;
            }
            // todo -> e se arrivo a 0?
        }
    }
})




