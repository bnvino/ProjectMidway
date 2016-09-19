using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EquipmentApp.Controllers
{
    public class MaintenanceWorksInfoController : Controller
    {
        //
        // GET: /MaintenaceWorksInfo/
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult AddNewMaintenanceWork()
        {
            return PartialView("AddNewMaintenanceWork");
        }

        public ActionResult ShowAllMaintenanceWorks()
        {
            return PartialView("ShowAllMaintenanceWorks");
        }

        public ActionResult EditMaintenanceWork()
        {
            return PartialView("EditMaintenanceWork");
        }

        public ActionResult DeleteMaintenanceWork()
        {
            return PartialView("DeleteMaintenanceWork");
        }
	}
}