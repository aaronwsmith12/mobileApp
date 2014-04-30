/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javaapplication2;

/**
 *
 * @author Colton
 */
public class JavaApplication2 {

    /**
     * @param args the command line arguments try this 1-2
     *
     * This program displays a conversion table of gallons to liters.
     *
     * call this program "GalToLitTable.java".
     */
    

        public static void main(String[] args) {
            double gallons, liters;
            int counter;

            counter = 0;
            for (gallons = 1; gallons <= 100; gallons++) {
                liters = gallons * 3.7854; //convert to liters
            

            System.out.println(gallons + " gallons is " + 
                    liters + " liters. ");

            counter++;
            //every 10th line print a blank line
            if (counter == 10) {
                System.out.println();
                counter = 0; //reset the line counter
            }
        }

    }

}
