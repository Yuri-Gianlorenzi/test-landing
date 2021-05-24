var app = new Vue ({
    el : '#app',
    data : {
        indexCutMachines : 0,
        cutMachines : [
            {
                img : 'img/elettrolaser_taglio.png',
                name : 'FiberLUX 3D',
                tips : [
                    'Taglio laser e incisione su oggetti inclinati, bombati o sferici',
                    'Incisioni su superfici irregolari aventi fino a 40 mm di scostamento',
                    'Scavi a layer e bassorilievi 3D',
                    'Incisioni di fotografie, nomi, disegni e loghi, compresi i marchi di fabbrica',
                    'Basso impatto ambientale e manutentivo'
                ]
            },
            {
                img : 'img/macchina_taglio1.jpg',
                name : 'Macchina 1',
                tips : [
                    'Costa poco, sembra una stampante, ma il suo dovere lo fà',
                    'Non si inceppa',
                    'Facile da usare',
                    'Indistruttibile'
                ]
            },
            {
                img : 'img/macchina_taglio2.jpg',
                name : 'Macchina 2',
                tips : [
                    'Taglio laser e incisione su oggetti inclinati, bombati o sferici',
                    'Costo medio',
                    'Scavi a layer e bassorilievi 3D',
                    'I pezzi di ricambio sono facili da trovare',
                    'Leggermente rumorosa'
                ]
            },
            {
                img : 'img/macchina_taglio3.jpg',
                name : 'Macchina 3',
                tips : [
                    'Silenziosa',
                    'Incisioni su superfici irregolari aventi fino a 40 mm di scostamento',
                    'Necessita di poca corrente elettrica',
                    'Incisioni di fotografie, nomi, disegni e loghi, compresi i marchi di fabbrica',
                    'Basso impatto ambientale e manutentivo'
                ]
            },
        ],//fine cutMachines
        userName : '',
        userPhone : '',
        userMail : '',
        userMessage : '',
        userDataManage : '',
        userNews : '',
        userData : [
            {
                name : '',
                phone : '',
                email : '',
                message : '',
                dataManagement : '',
                newsletter : ''
            }
        ],
    },
    methods : {

        nextCutMachines() {
            //forma estesa if
            if (this.indexCutMachines < this.cutMachines.length - 1) {
              this.indexCutMachines = this.indexCutMachines + 1;
            } else {
              this.indexCutMachines = 0;
            }

            //forma abbreviata if
            // (this.indexCutMachines < this.image.length - 1) ? this.indexCutMachines = this.indexCutMachines + 1 : this.indexCutMachines = 0;
        },

        prevCutMachines() {
            // if (this.indexCutMachines <= 0) {
            //   this.indexCutMachines = this.cutMachines.length - 1;
            // } else {
            //   this.indexCutMachines = this.indexCutMachines - 1;
            // }

            (this.indexCutMachines <= 0) ? this.indexCutMachines = this.cutMachines.length - 1 : this.indexCutMachines = this.indexCutMachines - 1;
        },

        saveInfoUser() {
            this.userData[0].name = this.userName;
            this.userData[0].phone = this.userPhone;
            this.userData[0].email = this.userMail;
            this.userData[0].message = this.userMessage;
            this.userData[0].dataManagement = this.userDataManage;
            this.userData[0].newsletter = this.userNews;

            console.log(this.userData);

            this.userName = '';
            this.userPhone = '';
            this.userMail = '';
            this.userMessage = '';
            this.userDataManage = '';
            this.userNews = '';
        }
    }//fine methods
});