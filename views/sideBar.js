(function(){dust.register("sideBar",body_0);function body_0(chk,ctx){return chk.write("<div class=\"well affix sidebar-nav\" id=\"").reference(ctx.get("id"),ctx,"h").write("\">  ").section(ctx.get("sections"),ctx,{"block":body_1},null).write("</div>");}function body_1(chk,ctx){return chk.write("  <ul class=\"nav nav-list\" id=\"").reference(ctx.get("id"),ctx,"h").write("\">            <li class=\"nav-header\">").reference(ctx.get("title"),ctx,"h").write("</li>      ").section(ctx.get("links"),ctx,{"block":body_2},null).write("                     </ul>  ");}function body_2(chk,ctx){return chk.write("      <li><a href=\"").reference(ctx.get("href"),ctx,"h").write("\">").reference(ctx.get("text"),ctx,"h").write("</a></li>      ");}return body_0;})();