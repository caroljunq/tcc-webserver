# tcc-webserver
## Descrição
Este repositório descreve a parte do webserver do tcc_gsmart. Esta parte da aplicação recebe arquivos .csv do tcc-sensor, processá-os e gera dataview (gráficos) para apresentá-los. 


![inicial](https://github.com/caroljunq/tcc-webserver/blob/master/statistics.png "Statistics")
![zones](https://github.com/caroljunq/tcc-webserver/blob/master/zones.png "Zones")


## Descrição Geral - GSMART
Trabalho de Conclusão de Curso. O sistema é uma ferramenta que mede o tráfego de pessoas através de redes Wi-Fi. A aplicação consiste de um Raspberry Pi que dentro de um determinada zona detecta smartphones e outros dispositivos móveis. Os dados coletados são enviados a um servidor para que sejam processados e uma dataview (dashboard) seja fornecida ao usuário. As informações fornecidas são: pico e média de tráfego de pessoas, número total de pessoas,  número de visitantes e frequentadores e fabricante de dispositivo móvel mais detectado (vendor). Essas informações podem ser utilizadas para realizar geomarketing.

### Tecnologias
* Express
* Nodejs
* EJS
* HTML/CSS/JS
* MongoDB

## Rodando app
* git clone
* cd tcc-webserver
* npm install 
* npm start
