public class Startup
{
    public void Configure(IApplicationBuilder app, IHostEnvironment env)
    {
        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
        }

        app.UseDefaultFiles();

        app.UseStaticFiles();
    }

    public void ConfigureServices(IServiceCollection services)
    {
        // Add services to the container.
    }

}
