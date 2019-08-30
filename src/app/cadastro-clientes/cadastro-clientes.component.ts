import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {
 
  cpf:string;
  telefone:string='';

  constructor(private fb: FormBuilder) { }

  formCadastro = new FormGroup({
    nome: new FormControl('',[Validators.required]),
    cpf: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    telefone: new FormControl('',[Validators.required]),
    endereco: new FormControl('',[Validators.required]),
    }); 

  ngOnInit() {
    
  }
  cadastro() {
    alert("Cadastro efetuado com sucesso");
    
  }

  mascara_cpf(cpf){
    if(this.cpf.length == 3){
      this.cpf = this.cpf + '.';	   
    }
    if(this.cpf.length == 7){
      this.cpf = this.cpf + '.';
    }
    if(this.cpf.length == 11){
      this.cpf = this.cpf + '-';
    }
  }

  mascara_tel(telefone){
    if(this.telefone.length == 0){
      this.telefone = '(';	   
    }
    if(this.telefone.length == 3){
      this.telefone = this.telefone + ')';
    }
    if(this.telefone.length == 8){
      this.telefone = this.telefone + '-';
    }
  }

}
