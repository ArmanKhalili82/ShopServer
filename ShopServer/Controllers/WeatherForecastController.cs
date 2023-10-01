using Microsoft.AspNetCore.Mvc;
using ShopServer;

namespace ShopServer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };



        [HttpGet(Name = "GetWeatherForecast")]
        public List<WeatherForecast> Get()
        {
            var shoplist = new List<WeatherForecast>();
            shoplist.Add(new WeatherForecast()
            {
                City = "Tehran"
            });

            shoplist.Add(new WeatherForecast()
            {
                City = "Stockholm"
            });
            return shoplist;

        }

        [HttpPost]
        public IActionResult Update(WeatherForecast model)
        {
            return Ok();
        }

        [HttpDelete]
        public IActionResult Delete(int Id)
        {
            return Ok();
        }
    
