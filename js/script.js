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
                urlImage: 'Elettronica',
                frase: 'Cosa fa un uccellino di un milligrammo su un ramo? Micro-cip! Micro-cip! Micro-cip!'
            },
            {
                urlImage: 'Il mare',
                frase: 'Cosa fanno due squali in una gara? Vengono squalificati'
            },
            {
                urlImage: 'Fai da te!',
                frase: 'Che vitaccia, ci vorrebbe un cacciavite più grosso.'
            },
            {
                urlImage: 'Colazione',
                frase: 'Un uomo entra in un caffè...Splash'
            },
            {
                urlImage: 'Dieta',
                frase: 'Ma perché se io mi nutro e tu ti nutri, Frank Sinatra?'
            },
            {
                urlImage: 'Psicologo',
                frase: 'Dottore, soffro di personalità multipla… vi prego, aiutateci!'
            },
            {
                urlImage: 'Business',
                frase: 'Chiude una fabbrica di carta igienica: andava a rotoli.'
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
            if(this.currentIndex === this.images.length - 1){
                this.currentIndex = 0;
            } else {
                this.currentIndex++;
            }
            // todo -> e se arrivo alla fine dell'array?
        },
        prevFreddura: function () {
            if(this.currentIndex === 0 ){
                this.currentIndex = this.images.length - 1;
            } else { 
                this.currentIndex--;
            }
            // todo -> e se arrivo a 0?
        }
    }
})




