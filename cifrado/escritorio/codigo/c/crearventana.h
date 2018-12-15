#include "botones.h"
GtkBuilder  *inicia;
GtkWidget    *ventana;
void crearventana(){
	  inicia = gtk_builder_new();
    gtk_builder_add_from_file(inicia, "cifradocesar.xml", NULL);
    ventana = GTK_WIDGET(gtk_builder_get_object(inicia, "window2"));
     crearinputtxt(); 
    g_object_unref(G_OBJECT (inicia));
    gtk_widget_show_all(ventana);                
    gtk_main();
    }
