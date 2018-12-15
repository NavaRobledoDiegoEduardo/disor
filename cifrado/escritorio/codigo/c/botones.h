
GtkWidget    *txtcifrar;
GtkWidget    *txtdescifrar;
GtkWidget    *desplazamiento;
GtkBuilder  *inicia;
void crearinputtxt(){
   txtcifrar = GTK_WIDGET(gtk_builder_get_object(inicia, "entry1"));
   txtdescifrar = GTK_WIDGET(gtk_builder_get_object(inicia, "entry4"));
   desplazamiento=GTK_WIDGET(gtk_builder_get_object(inicia,"entry2"));

   }
