#include <fcntl.h>
#include <stdio.h>
#include <errno.h>
#include <unistd.h>
#include <stdlib.h>
#include <string.h>

int main(void)
{
    FILE *fptr;

    fptr = fopen("data/database.txt", "r+");
    if (fptr == NULL) {
        fptr = fopen("data/database.txt", "w+");
        if (fptr == NULL) {
            perror("fopen");
            exit(2);    
        }
        fprintf(fptr, "ETNA42\n");
        printf("DATABASE CREATED\n");
        fflush(stdout);
        exit(1);
    }

    char *file_str = calloc(100, sizeof(char));
    if (file_str == NULL) {
        perror("calloc");
        if (!fclose(fptr)) {
            perror("fclose");
            exit(2);
        }
        exit(2);
    }

    fscanf(fptr,"%s", file_str);
    if (strcmp(file_str, "ETNA42") == 0) {
        printf("DATABASE FOUND\n");
        fflush(stdout);
        exit(0);
    }

    if (!fclose(fptr)) {
        perror("fclose");
        exit(2);
    }
    return 1;
}
