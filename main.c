// CODE BY YASON, DIEGO DAVID PEREZ | S12B

#include <stdio.h>
#include <stdlib.h>
#include <Windows.h>

extern void imgCvtGrayIntToDouble(int size, long long int *in, double *out);

int main(int argc, char* argv[]) {

	int height, width;
    int result = scanf("%d %d", &height, &width);
	int totalSize = height * width;

	long long int* inMatrix = (long long int*)malloc(totalSize * sizeof(long long int));
	double* outMatrix = (double*)malloc(totalSize * sizeof(double));

	if (inMatrix == NULL || outMatrix == NULL) {
		fprintf(stderr, "Memory allocation failed\n");
		return 1;
	}

	// get input
	for (int i = 0; i < totalSize; i++)
	{
		do {
			result = scanf("%lld", &inMatrix[i]);
			// skip any commas in buffer
			scanf("%*[ ,]");
		} while (result != 1);
	}

	imgCvtGrayIntToDouble(totalSize, inMatrix, outMatrix);

	// print output
	for (int i = 0; i < totalSize; i++)
	{
		if (i > 0) {
			printf(" ");
		}
		if (i % width == 0 && i != 0) {
			printf("\n");
		}

		printf("%.02f", outMatrix[i]);
	}
	
	return 0;
}
