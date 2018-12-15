GtkWidget    *txtcifrar;
GtkBuilder  *inicia;
void obtenertexto(){
   txtcifrar = GTK_WIDGET(gtk_builder_get_object(inicia, "entry1"));
const gchar *mensaje = gtk_entry_get_text(GTK_ENTRY(txtcifrar));
printf("m");
   }
void activaevento(){
	
	  g_signal_connect (txtcifrar, "clicked",G_CALLBACK (obtenertexto), NULL);
	}   
