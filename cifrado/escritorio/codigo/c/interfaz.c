#include <stdlib.h>
#include <string.h>
#include <gtk/gtk.h>
#include "crearventana.h"
#include "eventos.h"
int main (int argc, char *argv[])
{ 
gtk_init (&argc, &argv);
 crearventana();
 activaevento();
return 0;
}
