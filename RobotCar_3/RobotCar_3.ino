 //**************************** RobotCar_3 ********************************
// Only files with the .ino extension are scanned for include files.     *
// This is by design, for simplicity for one thing and so that a         *
// library can't include another library that includes another library   *
// and so on.                                                            *
// Athugid ad setja snuningsAtt i RobotFunctions.h a -1 ef servomotor    *
// er orvhentur  Breytt 23.3.2017                                        *
//***********************************************************************/
#include "Arduino.h"
#include "RobotFunctions.h"
#include <SoftwareSerial.h>
#include "MyDFPlayer.h"

//************************** uppsetning á forritinu *****************
void setup() 
{ 
    pinMode(motorVpwm_,OUTPUT);
    pinMode(motorVgir_,OUTPUT);
    pinMode(motorHpwm_,OUTPUT);
    pinMode(motorHgir_,OUTPUT);
  
    servoMain.attach(10);//Servo on digital pin ~10
  
    pinMode(sonarTrigger_,OUTPUT);
    pinMode(sonarEcho_,INPUT_PULLUP); //Allir inngangar verda að hafa pullup vidnam 
                                      //her notum við internal pullup (20kohm) orgjorvans 
    pinMode(TXspilari_,OUTPUT);
    pinMode(RXspilari_,INPUT_PULLUP); //Notum aftur Internal pullup vidnam

    Serial.begin(9600); 
    //******************** Setja upp MDFPlayer *************************
    mySerial.begin(9600);
    delay(500);
    //mp3_set_volume(25);
    mp3_set_volume(30);
    //mp3_set_volume(10);
    delay(100); 
    
     mp3_play_track(17);  // 17. Bíll í gang (gamli bíllinn)
     delay(5000); 
     mp3_play_track(19);     // 1. Riding along in my automobile 
     lagNr=2;
     //Timar
     time=millis();         //Setur time breytuna á tíma liðinn frá starti
     timeX=time;
     reiknaPulsBreidd(0,-1); //SONAR beint framm, í þessum bíl er leiðrétt um +2°
     lengdX=lengd(); 
}//End of setup *********

//*************************** Keyrslulykkjan **********************
void loop()
{  
    double haegri = 0;
    double vinstri = 0;

    //double fyrstaLengd = 0;
    //double onnurLengd = 0;
    
    reiknaPulsBreidd(0,-1); //SONAR beint framm, í þessum bíl er leiðrétt um +2°
    delay(100);    
    startCar(); // Bíll keyrir áfram
    Serial.println(lengd());
    delay(100);
    if(digitalRead(RXspilari_)==1) //Ef Spilari upptekinn þá er RXspilari==0
    {                              //RXspilari (D2) tengist BUSY tengi á spilara sjá mynd 17
      if(lagNr==20)
         lagNr=1;
      mp3_play_track(lagNr++);   
    }

   if(lengd()<40)
   {
      mp3_play_track(20);  
      stopCar();        
      //breakCar();
      delay(300);
      mp3_play_track(19);
      delay(300);  
      reiknaPulsBreidd(90,-1);
      haegri = lengd();
      //Serial.println(haegri);
      delay(2000);
      reiknaPulsBreidd(90, 1);
      delay(1000);
      vinstri = lengd();
      //Serial.println(vinstri);

      if(vinstri > haegri) {
        delay(1000);
        backCar();
        delay(300);
        backCar();
        delay(300);
        driveLeft();
        delay(300);
        driveLeft(); 
      } else if(haegri > vinstri) {
        delay(1000);
        backCar();
        delay(300);
        backCar();
        delay(300);
        driveRight();
        delay(300);
        driveRight();
      } 
      startCar();    
   }

}//End of loop *********************
