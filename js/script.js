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
        indexWeldMachines : 0,
        weldMachines : [
            {
                img : 'img/elettrolaser_saldatura.png',
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
                img : 'img/saldatura1.png',
                name : 'Macchina 1',
                tips : [
                    'Costa poco, sembra una stampante, ma il suo dovere lo fà',
                    'Non si inceppa',
                    'Facile da usare',
                    'Indistruttibile'
                ]
            },
            {
                img : 'img/saldatura2.jpg',
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
                img : 'img/saldatura3.jpg',
                name : 'Macchina 3',
                tips : [
                    'Silenziosa',
                    'Incisioni su superfici irregolari aventi fino a 40 mm di scostamento',
                    'Necessita di poca corrente elettrica',
                    'Incisioni di fotografie, nomi, disegni e loghi, compresi i marchi di fabbrica',
                    'Basso impatto ambientale e manutentivo'
                ]
            },
        ],//fine weldMachines
        indexClientsReviews : 0,
        clientsReviews : [
            {
                name : 'Franco Z.',
                job : 'Orafo',
                vote : '5',
                text : 'Molto disponibili e onesti. Sono rimasto davvero molto soddisfatto. 5 stelle meritate!'
            },
            {
                name : 'Luca',
                job : 'Saldatore di precisione',
                vote : '4',
                text : 'Le macchine da loro fornite risultano essere delle vere e proprie macchine per le incisioni, in grado di saldare il minimo pezzo di ferro ad un altro'
            },
            {
                name : 'Yuri',
                job : 'Gioielliere',
                vote : '5',
                text : 'Non so il motivo per cui ho comprato questo strumento, ma devo dire che è talmente bello che proverò ad usarlo ad ogni costo'
            },
            {
                name : 'Angela',
                job : 'Orafo',
                vote : '5',
                text : 'Credo che le 5 stelle bastino ad indicare la considerazione che ho di loro'
            },
            {
                name : 'Franco Z.',
                job : 'Orafo',
                vote : '3',
                text : 'Devo dare 2 stelle perchè io cercavo una banale saldatrice, e queste vanno ben oltre le mie capacità di utilizzarle'
            },
            {
                name : 'Thor',
                job : 'Dio del Tuono',
                vote : '1',
                text : 'Non ho bisogno di queste macchine per creare dei gioielli. Non ho bisogno di creare gioielli'
            },
            {
                name : 'Anna',
                job : 'Gioielliere',
                vote : '4',
                text : 'Peccato per il libretto delle istruzioni, non si trova la sezione scritta in italiano'
            }
        ],
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

        nextWeldMachines() {
            (this.indexWeldMachines < this.weldMachines.length - 1) ? this.indexWeldMachines = this.indexWeldMachines + 1 : this.indexWeldMachines = 0;
        },

        prevWeldMachines() {
            (this.indexWeldMachines <= 0) ? this.indexWeldMachines = this.weldMachines.length - 1 : this.indexWeldMachines = this.indexWeldMachines - 1;  
        },

        prevReviews() {
            (this.indexClientsReviews <= 0) ? this.indexClientsReviews = this.clientsReviews.length - 1 : this.indexClientsReviews = this.indexClientsReviews - 1;
        },

        nextReviews() {
            (this.indexClientsReviews < this.clientsReviews.length - 1) ? this.indexClientsReviews = this.indexClientsReviews + 1 : this.indexClientsReviews = 0;
            console.log(this.indexClientsReviews);
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