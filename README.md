# Term Paper/TCC
* https://github.com/caroljunq/tcc-webserver --> web server
* https://github.com/caroljunq/tcc-sensor --> sensor
* https://github.com/caroljunq/tcc_gsmart --> paper

## Descrição Geral - GSMART/ Description
Trabalho de Conclusão de Curso. O sistema é uma ferramenta que mede o tráfego de pessoas através de redes Wi-Fi. A aplicação consiste de um Raspberry Pi que dentro de um determinada zona detecta smartphones e outros dispositivos móveis. Os dados coletados são enviados a um servidor para que sejam processados e uma dataview (dashboard) seja fornecida ao usuário. As informações fornecidas são: pico e média de tráfego de pessoas, número total de pessoas,  número de visitantes e frequentadores e fabricante de dispositivo móvel mais detectado (vendor). Essas informações podem ser utilizadas para realizar geomarketing.

Completion of course work. The system is a tool that measures the traffic of people through Wi-Fi networks. The application consists of a Raspberry Pi that within a certain zone detects smartphones and other mobile devices. The collected data is sent to a server to be processed and a dataview (dashboard) is provided to the user. The information provided is: peak and average people traffic, total number of people, number of visitors and regulars, and most detected mobile device manufacturer (vendor). This information can be used to carry out geomarketing.



## Descrição
Este repositório descreve a parte do webserver do tcc_gsmart. Esta parte da aplicação recebe arquivos .csv do tcc-sensor, processá-os e gera dataview (gráficos) para apresentá-los. 


![inicial](https://github.com/caroljunq/tcc-webserver/blob/master/statistics.png "Statistics")
![zones](https://github.com/caroljunq/tcc-webserver/blob/master/zones.png "Zones")
![comparing](https://github.com/caroljunq/tcc-webserver/blob/master/comparing.png "Comparing")


### Tecnologias/Technologies
* Express
* Nodejs
* EJS
* HTML/CSS/JS
* MongoDB

## Rodando app/Running the app
* git clone
* cd tcc-webserver
* npm install 
* npm start
