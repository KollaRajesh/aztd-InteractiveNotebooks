using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args)
                            //.UseStartup<Startup>()
                            ;
 //Configure(IApplicationBuilder app, IHostEnvironment env)                      
    // var environment = builder.Environment;
    //  if (env.IsDevelopment()) {
    //     app.UseDeveloperExceptionPage();
    // }

//ConfigureServices
    //builder.Services.AddAuthentication();
    
var app = builder.Build();


//app.MapGet("/", () => "Hello World!");
 app.UseDefaultFiles();
//  app.UseDefaultFiles(new DefaultFilesOptions
// {
//     DefaultFileNames = new[] { "index.html" }
// });
 app.UseStaticFiles();

app.Run();


