import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.addEventListener('click',(e:any)=>{
      if(e.target.classList.contains('modal-container')){
        e.target.remove()
      }
      else if(e.target.classList.contains('modal-wrapper')){
        e.target.parentElement.remove()
      }
      else if(e.target.classList.contains('modal-left-header')){
        e.target.parentElement.parentElement.remove()
      }
      else if(e.target.classList.contains('modal-close-header')){
        e.target.parentElement.parentElement.remove()
      }
      else if(e.target.classList.contains('modal-hr')){
        e.target.parentElement.remove()
      }
      else if(e.target.classList.contains('modal-body')){
        e.target.parentElement.remove()
      }
    })
    document.addEventListener('mouseover',(e:any)=>{
      if(e.target.classList.contains('modal-close-header')){
        e.target.style.transform = 'scale(1.2)';
        e.target.parentElement.parentElement.style.border = "1px groove black"
      }
      else if(e.target.classList.contains('modal-wrapper')){
        e.target.parentElement.style.border = "1px groove black"
      }
      else if(e.target.classList.contains('modal-left-header')){
        e.target.parentElement.parentElement.style.border = "1px groove black"
      }
      else if(e.target.classList.contains('modal-hr')){
        e.target.parentElement.style.border = "1px groove black"
      }
      else if(e.target.classList.contains('modal-body')){
        e.target.parentElement.style.border = "1px groove black"
      }
    })
    document.addEventListener('mouseout',(e:any)=>{
      if(e.target.classList.contains('modal-close-header')){
        e.target.style.transform = 'scale(1)';
      }
    })
    document.addEventListener('keydown',(e:any)=>{
      if(e.key === "Escape"||e.key==="Esc"){
        if(this.toast1){
          this.toast1.remove()
          this.toast1 = null
          for(let i=0;i<this.timeout1.length;i++){
            clearTimeout(this.timeout1[i])
          }
          this.timeout1 = []
        }
        else if(this.toast2){
          this.toast2.remove()
          this.toast2 = null
          for(let i=0;i<this.timeout2.length;i++){
            clearTimeout(this.timeout2[i])
          }
          this.timeout2 = []
        }
        else if(this.toast3){
          this.toast3.remove()
          this.toast3 = null
          for(let i=0;i<this.timeout3.length;i++){
            clearTimeout(this.timeout3[i])
          }
          this.timeout3 = []
        }
        else if(this.toast4){
          this.toast4.remove()
          this.toast4 = null
          for(let i=0;i<this.timeout4.length;i++){
            clearTimeout(this.timeout4[i])
          }
          this.timeout4 = []
        }
      }
    })
  }
  toast1: any;
  toast2: any;
  toast3: any;
  toast4: any;

  timeout1: any[] = [];
  timeout2: any[] = [];
  timeout3: any[] = [];
  timeout4: any[] = [];

  open() {
    if (!this.toast1 || !this.toast2 || !this.toast3) {
      let modalContainer = document.createElement('div');
      modalContainer.className = 'modal-container';
      modalContainer.style.transition = 'all .3s ease-in';
      modalContainer.style.position = 'absolute';
      modalContainer.style.opacity = '0';
      modalContainer.style.height = 'auto';
      modalContainer.style.right = '0px';
      modalContainer.style.bottom = '0px';
      modalContainer.style.minWidth = '200px';
      modalContainer.style.backgroundColor = 'white';
      modalContainer.style.cursor="pointer";
      modalContainer.style.borderRadius="5px";
      modalContainer.style.padding = "0";
      let headerWrapperModal = document.createElement("div");
      headerWrapperModal.className = 'modal-wrapper';
      headerWrapperModal.style.padding = "5% 5%";
      headerWrapperModal.style.margin = "0";
      headerWrapperModal.style.display = "flex";
      headerWrapperModal.style.alignItems = "center";
      headerWrapperModal.style.justifyContent = "space-between"
      let headerLeftModal = document.createElement('p');
      headerLeftModal.className = 'modal-left-header';
      headerLeftModal.textContent = 'Modal Info ula';
      headerLeftModal.style.backgroundColor = "white";
      headerLeftModal.style.padding = "0";
      headerLeftModal.style.margin = "0";
      headerLeftModal.style.display='inline-block';
      headerLeftModal.style.width='90%';
      let headerRightModal = document.createElement('p');
      headerRightModal.className='modal-close-header';
      headerRightModal.innerHTML='&times;';
      headerRightModal.style.fontSize='xx-large'
      headerRightModal.style.lineHeight='60%'
      headerRightModal.style.backgroundColor='white';
      headerRightModal.style.padding = "0";
      headerRightModal.style.margin = "0";
      headerRightModal.style.display='inline-block';
      headerRightModal.style.width='10%';
      headerRightModal.style.textAlign='center';
      headerRightModal.style.transition = 'all .3s ease-in';
      let hrModal = document.createElement("hr");
      hrModal.style.width = "100%"
      hrModal.style.margin="0% auto"
      hrModal.className = 'modal-hr';
      let bodyModal = document.createElement("p");
      bodyModal.className = 'modal-body'
      bodyModal.textContent = "Burası Modal Body ula"
      bodyModal.style.padding = "5%";
      setTimeout(() => {
        modalContainer.style.opacity = '1';
      }, 1);
      modalContainer.appendChild(headerWrapperModal);
      headerWrapperModal.appendChild(headerLeftModal);
      headerWrapperModal.appendChild(headerRightModal);
      modalContainer.appendChild(hrModal);
      modalContainer.appendChild(bodyModal);
      document.body.appendChild(modalContainer);
      if (!this.toast1) {
        this.toast1 = modalContainer;
        let toast1TimeoutOpen = setTimeout(() => {
          this.toast1!.style.opacity = '0';
        }, 5500);
        let toast1TimeoutClose = setTimeout(() => {
          this.toast1!.remove();
          this.toast1 = null;
          for(let i=0;i<this.timeout1.length;i++){
            clearTimeout(this.timeout1[i])
          }
          this.timeout1 = []
        }, 5800);
        this.timeout1.push(toast1TimeoutOpen);
        this.timeout1.push(toast1TimeoutClose);
      } else if (!this.toast2) {
        modalContainer.style.bottom = (modalContainer.offsetHeight*1.2).toString()+'px';
        this.toast2 = modalContainer;
        let toast2TimeoutOpen = setTimeout(() => {
          this.toast2.style.opacity = '0';
        }, 5500);
        let toast2TimeoutClose = setTimeout(() => {
          this.toast2.remove();
          this.toast2 = null;
          for(let i=0;i<this.timeout2.length;i++){
            clearTimeout(this.timeout2[i])
          }
          this.timeout2 = []
        }, 5800);
        this.timeout2.push(toast2TimeoutOpen);
        this.timeout2.push(toast2TimeoutClose);
      } else if (!this.toast3) {
        modalContainer.style.bottom = (modalContainer.offsetHeight*2.4).toString() + 'px';
        this.toast3 = modalContainer;
        let toast3TimeoutOpen = setTimeout(() => {
          this.toast3.style.opacity = '0';
        }, 5500);
        let toast3TimeoutClose = setTimeout(() => {
          this.toast3.remove();
          this.toast3 = null;
          for(let i=0;i<this.timeout3.length;i++){
            clearTimeout(this.timeout3[i])
          }
          this.timeout3 = []
        }, 5800);
        this.timeout3.push(toast3TimeoutOpen);
        this.timeout3.push(toast3TimeoutClose);
      }
    }
    else if (this.toast1 && this.toast2 && this.toast3 && !this.toast4) {
      let modalContainer = document.createElement('div');
      modalContainer.className = 'modal-container';
      modalContainer.style.transition = 'all .3s ease-in';
      modalContainer.style.position = 'absolute';
      modalContainer.style.opacity = '0';
      modalContainer.style.height = 'auto'
      modalContainer.style.right = '35%';
      modalContainer.style.bottom = '0px'
      modalContainer.style.width = '30%';
      modalContainer.style.backgroundColor = 'red';
      modalContainer.style.cursor="pointer";
      modalContainer.style.borderRadius="5px";
      modalContainer.style.padding = "0";

      let headerWrapperModal = document.createElement("div");
      headerWrapperModal.className = 'modal-wrapper';
      headerWrapperModal.style.padding = "5% 5%";
      headerWrapperModal.style.margin = "0";
      headerWrapperModal.style.display = "flex";
      headerWrapperModal.style.alignItems = "center";
      headerWrapperModal.style.justifyContent = "space-between"
      let headerLeftModal = document.createElement('p');
      headerLeftModal.className = 'modal-left-header';
      headerLeftModal.textContent = 'Calm Down xD';
      headerLeftModal.style.backgroundColor = "red";
      headerLeftModal.style.padding = "0";
      headerLeftModal.style.margin = "0";
      headerLeftModal.style.display='inline-block';
      headerLeftModal.style.width='90%';
      let headerRightModal = document.createElement('p');
      headerRightModal.className='modal-close-header';
      headerRightModal.innerHTML='&times;';
      headerRightModal.style.fontSize='xx-large'
      headerRightModal.style.lineHeight='60%'
      headerRightModal.style.backgroundColor='red';
      headerRightModal.style.padding = "0";
      headerRightModal.style.margin = "0";
      headerRightModal.style.display='inline-block';
      headerRightModal.style.width='10%';
      headerRightModal.style.textAlign='center';
      headerRightModal.style.transition = 'all .3s ease-in';
      let hrModal = document.createElement("hr");
      hrModal.style.width = "100%"
      hrModal.style.margin="0 auto"
      hrModal.className = 'modal-hr';
      hrModal.style.backgroundColor = 'black';
      hrModal.style.color = 'black';
      let bodyModal = document.createElement("p");
      bodyModal.className = 'modal-body'
      bodyModal.textContent = "You are too excited; please click the buttons slowly :)"
      bodyModal.style.padding = "5%";
      bodyModal.style.fontSize = "medium"
      setTimeout(() => {
        modalContainer.style.opacity = '1';
      }, 1);

      modalContainer.appendChild(headerWrapperModal);
      headerWrapperModal.appendChild(headerLeftModal);
      headerWrapperModal.appendChild(headerRightModal);
      modalContainer.appendChild(hrModal);
      modalContainer.appendChild(bodyModal);
      document.body.appendChild(modalContainer);
      modalContainer.style.bottom = '50%'
      this.toast4 = modalContainer;
      let toast4TimeoutOpen = setTimeout(() => {
        this.toast4.style.opacity = '0';
      }, 5500);
      let toast4TimeoutClose = setTimeout(() => {
        this.toast4.remove();
        this.toast4 = null;
        for(let i=0;i<this.timeout4.length;i++){
          clearTimeout(this.timeout4[i])
        }
        this.timeout4 = []
      }, 5800);
      this.timeout4.push(toast4TimeoutOpen);
      this.timeout4.push(toast4TimeoutClose);
    }
  }
}
