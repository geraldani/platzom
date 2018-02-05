# Platzom
Platzom es un Idioma inventado para el Curso de fundamentos de **JavaScript** de [Platzi](https://platzi.com).
El mejor lugar para educación online.

## Descripción del idioma
- Si termina con ar se le quitan esas dos letras. Ejem: programar => program
- Si la palabra comienza con z, se le añade pe al final. Ejem: zorro => zorrope , zarpar => zarppe
- Si la palabra traducida tiene 10 o mas letras, se debe partir en dos por la mitad y uni con un guion medio. Ejem: abededario => abece-dario
- Si la palabra original es un palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayusculas y minusculas . Ejem: sometemos => SoMeTeMoS

## Instalación 
```
npm install platzom
```

## Uso
```javascript
import platzom from 'platzom'
platzom("programar") //program
platzom("zarpar") //zarppe
platzom("abecedario") //abecedario
platzom("sometemos") //SoMeTeMoS
```
## Creditos
[Geraldyn Chirnos](http://instagram.com/geral_desousa27)

## Licence 
[MIT](https://opensource.org/licenses/MIT)