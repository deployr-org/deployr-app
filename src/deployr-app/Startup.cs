using System.IO.Compression;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.Extensions.DependencyInjection;

namespace Deployr.App
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            // NOTE(Dan): As we're only serving up the SPA files, and not anything else, enabling over TLS should be fine here.
            //            see: https://en.wikipedia.org/wiki/BREACH
            services.AddResponseCompression(options => options.EnableForHttps = true);
            services.Configure<GzipCompressionProviderOptions>(options => options.Level = CompressionLevel.Optimal);
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "app/dist";
            });
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
                app.UseDeveloperExceptionPage();

            app.UseHttpsRedirection();
            app.UseResponseCompression();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "app/dist";
            });
        }
    }
}
