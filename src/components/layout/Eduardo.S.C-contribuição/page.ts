//import { grid2Classes } from "@mui/material"
//import { frFR } from "@mui/material/locale"
//import { trTR } from "@mui/x-data-grid"
//creted by Eduardo S. C. form SP/BR
//import './globals.css'
//import { AuthContextProvider } from '@/components/auth/AuthContext'
//import ThemeRegistry from '@/components/theme/ThemeRegistry'
//import { darkTheme } from '@/components/theme/default'
//import type { Metadata } from 'next'
//"use client"

console.log("script conectado");
//ag a 
  const menusome = `
<script>
const menumaeautismo= document.getElementsByClassName("MuiDrawer-paper");
menumaeautismo[0];
//apaga a divisorio ,tudo dentro dela
menumaeautismo[0].innerText="";
//apaga clases que definem fundo preto pro menu
menumaeautismo[0].removeChild("MuiPaper-root");
menumaeautismo[0].classList.remove("mui-1evlaxh");
</script>
`;

//exibi r vairiavel que contem o menu
//console.log(menusome);
//se usuario é autista
console.log(String(fecharmenudependentes("true", menusome) ));

//escreve na pasgina o script
//document.write("teste")
/* doc
//ternario consifççaõ se verdadeiro
*/
// gera script no Frointed que  apga erro do no fornte apaga o men
//correção de  bugs com string
//module.exports=;

function fecharmenudependentes(usuarioautista:String, menucomando:String) {
  //:boolean converte pra texto pra evitar erro doutro valores
  usuarioautista=String(usuarioautista);
  
  if (usuarioautista == "true") {
    //se usuairo for autista injeta Javascript no Frointeed pra apagar o menu 
    return  menucomando;

  }
  if (usuarioautista == "false") {
       return "O usuario não é autista";
  }
  // pra ser exportad
 //fecharmenudependentes()

  //se valor invçlido for um numero,ou texot com aspas
else {//se valor invlaido 
return "Valor inválido: "+usuarioautista;
  
  };
  
};
/** correção de bug
//tentar executar a funçao pra apagar o menu 
**/
//referencias/
//Aplicacoes Web Real Time com Node-js editora Casa do Codigo
//https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
//https://react.dev/learn/react-developer-tools
//https://stackoverflow.com/questions/65359801/how-do-i-reference-document-in-react-typescript
//https://typescriptland.org
//https://develepor.mozilla.org/