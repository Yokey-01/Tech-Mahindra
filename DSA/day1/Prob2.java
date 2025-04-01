public class Prob2{
    public static void main(String[] args){
        int arr[]={10,4,2,6};
        int max=0;
        for(int i=0;i<arr.length;i++){
            for(int j=i+1;j<arr.length;j++){
                if(arr[i]>arr[j] && max<arr[i]-arr[j]){
                    max=arr[i]-arr[j];
                }   
            } 
        }
        System.out.println(max);
    }   
}