using Microsoft.AspNetCore.Http.HttpResults;
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
            return new List<WeatherForecast>()
            {
                City.add("Tehran");
            }

            return new List<WeatherForecast>()
            {
                City.add("Stockholm");
            }
}
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
}