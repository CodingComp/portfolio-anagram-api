var builder = WebApplication.CreateBuilder(args); 

// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

/*  CHECK FOR SECURITY RISKS */
builder.Services.AddCors(options =>
{
    options.AddPolicy("portfolio-anagram-api", policyBuilder =>
    {
        policyBuilder.AllowAnyOrigin();
        policyBuilder.AllowAnyHeader();
        policyBuilder.WithMethods("GET");
    });
});

var app = builder.Build(); 
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.UseCors("portfolio-anagram-api");
app.Run(); 
