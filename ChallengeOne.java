import java.util.Scanner;

public class ChallengeOne {


    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String string = sc.nextLine();

        System.out.println(isHarshad(string));
    }

    public static Boolean isHarshad(String string){
        int number = Integer.parseInt(string);
        int sum = sum(number);

        if(number % sum == 0){
            return true;
        }else {
            return false;
        }
    }
    public static int sum(int num){
        int total = 0;
        if(num == 0){
            total += 0;
        }else{
            total += (num % 10 + sum(num /10));
        }
        return total;
    }
}
