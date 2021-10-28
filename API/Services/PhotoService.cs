using API.Interfaces;
using System;
using System.Threading.Tasks;

//Cloudinary
using CloudinaryDotNet;
//IOption
using Microsoft.Extensions.Options;
//CloudinarySettings
using API.Helpers;
//Cloudinary Type
using CloudinaryDotNet.Actions;
//IFormFile
using Microsoft.AspNetCore.Http;

namespace API.Services
{
    //IPhotoService Interface Implementation
    //---------------------------------------
    public class PhotoService : IPhotoService
    {
        //Cloudinary Configurations
        //===========================
        private readonly Cloudinary _cloudinary;
        public PhotoService(IOptions<CloudinarySettings> config)
        {
            //Create Account
            var acc = new Account(
               config.Value.CloudName,
               config.Value.ApiKey,
               config.Value.ApiSecret
            );

            //Pass Account -> Cloudinary
            _cloudinary = new Cloudinary(acc);
        }
        

        //===============
        // Upload Image 
        //===============
        //_cloudinary.uploadAsync(uploadParams)
        //using => destroy when not in use
        public async Task<ImageUploadResult> AddPhotoAsync(IFormFile file)
        {
            //uploadResult obj
            var uploadResult = new ImageUploadResult();

            //If File is there
            if(file.Length > 0)
            {
                //read file data as stream
                using var stream = file.OpenReadStream();

                //upload Parameters
                var uploadParams = new ImageUploadParams
                {
                    File = new FileDescription(file.FileName, stream),
                    Transformation = new Transformation().Height(500).Width(500).Crop("fill").Gravity("face")
                };

                //uploadResult using uploadAsync()
                uploadResult = await _cloudinary.UploadAsync(uploadParams);
            }

            //return uploadResult obj
            return uploadResult;
        }



        //==============
        // Delete Image
        //==============
        //_cloudinary.DestroyAsync(deleteParams)
        public async Task<DeletionResult> DeletePhotoAsync(string publicId)
        {
            //deleteParams using Id(publicId from Cloudinary)
            var deleteParams = new DeletionParams(publicId);

            //deleteResult using DestroyAsync()
            var result = await _cloudinary.DestroyAsync(deleteParams);

            //return deleteResult obj
            return result;
        }
    }
}
