using Xamarin.Forms;

namespace KasteelFloris
{
	public partial class KasteelFlorisPage : ContentPage
	{
		public KasteelFlorisPage()
		{
			InitializeComponent();
		}

		async void KasteelFlorisPageJC_Clicked(object sender, System.EventArgs e)
		{
			await Navigation.PushAsync(new KasteelFlorisPageJC());
		}

		async void KasteelFlorisPageMdW_Clicked(object sender, System.EventArgs e)
		{
			await Navigation.PushAsync(new KasteelFlorisPageMdW());
		}
	}
}
