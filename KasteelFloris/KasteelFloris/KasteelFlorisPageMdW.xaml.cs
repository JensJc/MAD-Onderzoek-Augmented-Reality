using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Plugin.Media;
using Plugin.Media.Abstractions;
using Xamarin.Forms;

namespace KasteelFloris
{
	public partial class KasteelFlorisPageMdW : ContentPage
	{
		public KasteelFlorisPageMdW()
		{
			InitializeComponent();
		}

		async void UseCamera_Clicked(object sender, System.EventArgs e)
		{
			// using the XAM.Plugin.Media Package for Camera access (package can be downloaded through the solution)
			// more info: https://github.com/jamesmontemagno/MediaPlugin
			//
			// for iOS:     make sure to add 2 values to the info.plist
			// for Android: make sure to read the specific android requirements

			await CrossMedia.Current.Initialize();

			if (!CrossMedia.Current.IsCameraAvailable || !CrossMedia.Current.IsTakePhotoSupported)
			{
				await DisplayAlert("No Camera", ":( No camera available.", "OK");
				return;
			}

			bool savePicture = await DisplayAlert("Question?", "Would you like to save the picture afterwards", "Yes", "No");

			MediaFile file = await CrossMedia.Current.TakePhotoAsync(new StoreCameraMediaOptions
			{
				SaveToAlbum = savePicture
				//Directory = "Sample",
				//Name = "test.jpg"
			});

			if (file == null)
				return;

			//await DisplayAlert("File Location", file.Path, "OK");

			imageArea.Source = ImageSource.FromStream(() =>
			{
				var stream = file.GetStream();
				file.Dispose();
				return stream;
			});
		}
	}
}
