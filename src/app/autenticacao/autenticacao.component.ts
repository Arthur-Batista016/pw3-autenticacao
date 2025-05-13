import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-autenticacao',
  imports: [ReactiveFormsModule],
  templateUrl: './autenticacao.component.html',
  styleUrl: './autenticacao.component.css'
})
export class AutenticacaoComponent {
  resposta:string = "Bem vindo";
  exibeResposta:boolean = true;
  esconderCadastro:boolean = false;
  usuario_cadastrado:string = "Mazinho";
  senha_cadastrada:string = "etec123"
  autenticarForm:FormGroup


  constructor(private fb:FormBuilder) {
      this.autenticarForm = this.fb.group({
        usuario : this.fb.control(""),
        senha : this.fb.control("")
      })
  }

  onAutenticar(){
    let usuario_inserido = this.autenticarForm.get("usuario")?.value;
    let senha_inserida = this.autenticarForm.get("senha")?.value;

    if (senha_inserida == this.senha_cadastrada && usuario_inserido == this.usuario_cadastrado){
      this.esconderCadastro = true;
      this.exibeResposta = false;
      this.resposta = "Bem vindo " + this.usuario_cadastrado + "!";
    }else{
      this.esconderCadastro = true;
      this.exibeResposta = false;
      this.resposta = "Usuario/Senha invalido!";
    }


  }


  }


