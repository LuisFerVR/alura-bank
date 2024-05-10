<p align="center"> <img src="https://imgur.com/mIBmcEL.png" alt="Javascript: validando formularios"> </p>

<hr>

<p align="center"> <img src="https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png" alt="Logo de Alura"> </p>
<p align="center">Formulario de creación de cuenta para el banco virtual AluraBank.</p>

## Tecnologías utilizadas durante el curso
* JavaScript

## Tecnologías utilizadas en el proyecto
* HTML
* CSS

pattners:
![alt text](image.png)

Cuando trabajamos en el registro de una persona o empresa en una aplicación bancaria como Alura-Bank necesitamos validar su código de identificación laboral o tributaria. Cada país tiene una fórmula específica para generar este código.

Tomaremos como ejemplo el Cuil (Código Único de identificación Laboral) o Cuit (Código Unico de Identificación Tributaria).

CUIL / CUIT

CUIL/T: Son 11 números en total:
XY – 12345678 – Z
XY: Indican el tipo (Masculino, Femenino o una empresa)
12345678: Número de DNI
Z: Código Verificador
Algoritmo:

Se determina XY con las siguientes reglas
Masculino: 20
Femenio: 27
Empresa: 30
Se multiplica XY 12345678 por un número de forma separada:



Se suman dichos resultados. El resultado obtenido se divide por 11. De esa división se obtiene un Resto que determina Z.

Si el resto es 0 = Entonces Z=0 Si el resto es 1= Entonces se aplica la siguiente regla:

Si es hombre: Z=9 y XY pasa a ser 23
Si es mujer: Z=4 y XY pasa a ser 23
Caso contrario XY pasa a ser (11- Resto).

148/11=13,4545—>13 (Redondeo)

Obtenemos el resto de la división

148 – (13*11)=5

Determinamos Z

11-5 = 6

El resultado final sería 20-12345678-6

Lo que aprendi este módulo 3 del cursp de válidar formulario de una aplicación bancaria

Valide los dígitos de control de Cuil/Cuit;
Transforme fórmulas matemáticas en código;
Tratar con fechas en JavaScript;
Construya comparaciones de fechas para verificar la edad.