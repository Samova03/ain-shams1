using Ainshmes.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace Ainshmes.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }


        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Environmental_Service()
        {
            return View();
        }
        public IActionResult Scientific_research()
        {
            return View();
        }

        public IActionResult Contact()
        {
            return View();
        }

        
        public IActionResult TablesFinel()
        {
            return View();
        }

        public IActionResult TablesStudy()
        {
            return View();
        }

        public IActionResult Acadimyy()
        {
            return View();
        }

        public IActionResult About1()
        {
            return View();
        }
        public IActionResult Evidence()
        {
            return View();
        }

        public IActionResult Graduates()
        {
            return View();
        }
        public IActionResult IT_Section()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
