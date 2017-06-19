
#include <string>    
#include <ostream>  
#include <iostream> 

using namespace std;


extern "C" {

    int f(float a, int b) {
        printf("%f, %d\n", a, b);
        return 0;
    }

    int arrFuncDouble(double *v, int len) {
        cout << "len: " << len;
        for (int i = 0 ; i < len ; ++i) {
            cout << v[i] << ", ";
        }
        cout << endl << flush;
        return 0;
    }

    int arrFuncFloat(float *v, int len) {
        cout << "len: " << len;
        for (int i = 0 ; i < len ; ++i) {
            cout << v[i] << ", ";
        }
        cout << endl << flush;
        return 0;
    }
    int arrFuncInt(int *v, int len) {
        cout << "len: " << len;
        for (int i = 0 ; i < len ; ++i) {
            cout << v[i] << ", ";
        }
        cout << endl << flush;
        return 0;
    }

}


