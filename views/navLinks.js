(function(){dust.register("navLinks",body_0);function body_0(chk,ctx){return chk.section(ctx.get("links"),ctx,{"block":body_1},null);}function body_1(chk,ctx){return chk.write("<li id=\"").reference(ctx.get("id"),ctx,"h").write("\"><a href=\"").reference(ctx.get("href"),ctx,"h").write("\">").reference(ctx.get("text"),ctx,"h").write("</a></li>");}return body_0;})();